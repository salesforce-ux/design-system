# Copyright (c) 2015, salesforce.com, inc. All rights reserved.
#
# Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
# Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
# Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
# Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

module SCSSLint
  # Prevent this syntax:
  # foo {
  #   bar & {
  #     ...
  #   }
  # }
  class Linter::DisallowLastParentSelector < Linter
    include LinterRegistry
    MESSAGE = 'Unsupported parent (&) selector (will break the scoped build)'.freeze

    def visit_comma_sequence(comma_sequence)
      @multiple_sequences = comma_sequence.members.size > 1
    end

    def visit_sequence(sequence)
      return unless sequence_ends_with_parent?(sequence.members.last)

      # Allow concatentation, e.g.
      # element {
      #   &.foo {}
      # }
      return if sequence.members.last.members.size > 1

      # Allow isolated parent
      return if isolated_parent?(sequence)

      # Special case: allow an isolated parent to appear if it is part of a
      # comma sequence of more than one sequence, as this could be used to DRY
      # up code.
      return if @multiple_sequences && isolated_parent?(sequence)

      add_lint(sequence.members.last.line, MESSAGE)
    end

  private

    def isolated_parent?(sequence)
      sequence.members.size == 1 &&
        sequence_ends_with_parent?(sequence.members.last)
    end

    def sequence_ends_with_parent?(simple_sequence)
      return unless simple_sequence.is_a?(Sass::Selector::SimpleSequence)
      last = simple_sequence.members.last
      last.is_a?(Sass::Selector::Parent) &&
        last.suffix.nil? # Ignore concatenated selectors, like `&-something`
    end
  end
end
