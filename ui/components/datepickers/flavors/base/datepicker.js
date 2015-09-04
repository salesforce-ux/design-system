/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/* eslint-disable */

$(document).ready(function() {
   var dp1 = new datepicker('dp1', 'date', true);

   $('#bn_date').click(function(e) {
      dp1.showDlg();

      e.stopPropagation();
      return false;
   });
});

function datepicker(id, target, modal) {


   this.$id = $('#' + id); // element to attach widget to
   this.$monthObj = this.$id.find('#month');
   this.$prev = this.$id.find('#bn_prev');
   this.$next = this.$id.find('#bn_next');
   this.$grid = this.$id.find('#cal');
   this.$target = $('#' + target); // div or text box that will receive the selected date string and focus (if modal)
   this.bModal = modal; // true if datepicker should appear in a modal dialog box.

   this.monthNames = ['January', 'February', 'March', 'April','May','June',
         'July', 'August', 'September', 'October', 'November', 'December'];

   this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

   this.dateObj = new Date();

   this.curYear = this.dateObj.getFullYear();
   this.year = this.curYear;

   this.curMonth = this.dateObj.getMonth();
   this.month = this.curMonth;
   this.currentDate = true;

   this.date = this.dateObj.getDate();

   this.keys = {
                tab:       9,
                enter:    13,
                esc:      27,
                space:    32,
                pageup:   33,
                pagedown: 34,
                end:      35,
                home:     36,
                left:     37,
                up:       38,
                right:    39,
                down:     40
               };

   // display the current month
   this.$monthObj.html(this.monthNames[this.month] + ' ' + this.year);

   // populate the calendar grid
   this.popGrid();

   // update the table's activedescdendant to point to the current day
   this.$grid.attr('aria-activedescendant', this.$grid.find('.today').attr('id'));

   this.bindHandlers();

   // hide dialog if in modal mode
   if (this.bModal == true) {
      this.$id.attr('aria-hidden', 'true');
   }
}

//
// popGrid() is a member function to populate the datepicker grid with calendar days
// representing the current month
//
// @return N/A
//
datepicker.prototype.popGrid = function() {

   var numDays = this.calcNumDays(this.year, this.month);
   var startWeekday = this.calcStartWeekday(this.year, this.month);
   var weekday = 0;
   var curDay = 1;
   var rowCount = 1;
   var $tbody = this.$grid.find('tbody');

   var gridCells = '\t<tr id="row1">\n';

   // clear the grid
   $tbody.empty();
   $('#msg').empty();

   // Insert the leading empty cells
   for (weekday = 0; weekday < startWeekday; weekday++) {

      gridCells += '\t\t<td class="empty">&nbsp;</td>\n';
   }

   // insert the days of the month.
   for (curDay = 1; curDay <= numDays; curDay++) {

      if (curDay == this.date && this.currentDate == true) {

         gridCells += '\t\t<td id="day' + curDay + '" class="today" headers="row' +
                      rowCount + ' ' + this.dayNames[weekday] + '" role="gridcell" aria-selected="false">' + curDay + '</td>';

      }
      else {
         gridCells += '\t\t<td id="day' + curDay + '" headers="row' +
                      rowCount + ' ' + this.dayNames[weekday] + '" role="gridcell" aria-selected="false">' + curDay + '</td>';
      }


      if (weekday == 6 && curDay < numDays) {
         // This was the last day of the week, close it out
         // and begin a new one
         gridCells += '\t</tr>\n\t<tr id="row' + rowCount + '">\n';
         rowCount++;
         weekday = 0;
      }
      else {
         weekday++;
      }
   }

   // Insert any trailing empty cells
   for (weekday; weekday < 7; weekday++) {

      gridCells += '\t\t<td class="empty">&nbsp;</td>\n';
   }

   gridCells += '\t</tr>';

   $tbody.append(gridCells);
}

//
// calcNumDays() is a member function to calculate the number of days in a given month
//
// @return (integer) number of days
//
datepicker.prototype.calcNumDays = function(year, month) {

   return 32 - new Date(year, month, 32).getDate();
}

//
// calcstartWeekday() is a member function to calculate the day of the week the first day of a
// month lands on
//
// @return (integer) number representing the day of the week (0=Sunday....6=Saturday)
//
datepicker.prototype.calcStartWeekday = function(year, month) {

   return  new Date(year, month, 1).getDay();

} // end calcStartWeekday()

//
// showPrevMonth() is a member function to show the previous month
//
// @param (offset int) offset may be used to specify an offset for setting
//                      focus on a day the specified number of days from
//                      the end of the month.
// @return N/A
//
datepicker.prototype.showPrevMonth = function(offset) {
   // show the previous month
   if (this.month == 0) {
      this.month = 11;
      this.year--;
   }
   else {
      this.month--;
   }

   if (this.month != this.curMonth || this.year != this.curYear) {
      this.currentDate = false;
   }
   else {
      this.currentDate = true;
   }

   // populate the calendar grid
   this.popGrid();

   this.$monthObj.html(this.monthNames[this.month] + ' ' + this.year);

   // if offset was specified, set focus on the last day - specified offset
   if (offset != null) {
      var numDays = this.calcNumDays(this.year, this.month);
      var day = 'day' + (numDays - offset);

      this.$grid.attr('aria-activedescendant', day);
      $('#' + day).addClass('focus').attr('aria-selected', 'true');
   }

} // end showPrevMonth()

//
// showNextMonth() is a member function to show the next month
//
// @param (offset int) offset may be used to specify an offset for setting
//                      focus on a day the specified number of days from
//                      the beginning of the month.
// @return N/A
//
datepicker.prototype.showNextMonth = function(offset) {

   // show the next month
   if (this.month == 11) {
      this.month = 0;
      this.year++;
   }
   else {
      this.month++;
   }

   if (this.month != this.curMonth || this.year != this.curYear) {
      this.currentDate = false;
   }
   else {
      this.currentDate = true;
   }

   // populate the calendar grid
   this.popGrid();

   this.$monthObj.html(this.monthNames[this.month] + ' ' + this.year);

      // if offset was specified, set focus on the first day + specified offset
      if (offset != null) {
         var day = 'day' + offset;

         this.$grid.attr('aria-activedescendant', day);
         $('#' + day).addClass('focus').attr('aria-selected', 'true');
      }

} // end showNextMonth()

//
// showPrevYear() is a member function to show the previous year
//
// @return N/A
//
datepicker.prototype.showPrevYear = function() {

      // decrement the year
      this.year--;

      if (this.month != this.curMonth || this.year != this.curYear) {
         this.currentDate = false;
      }
      else {
         this.currentDate = true;
      }

      // populate the calendar grid
      this.popGrid();

      this.$monthObj.html(this.monthNames[this.month] + ' ' + this.year);

} // end showPrevYear()

//
// showNextYear() is a member function to show the next year
//
// @return N/A
//
datepicker.prototype.showNextYear = function() {

   // increment the year
   this.year++;

   if (this.month != this.curMonth || this.year != this.curYear) {
      this.currentDate = false;
   }
   else {
      this.currentDate = true;
   }

   // populate the calendar grid
   this.popGrid();

   this.$monthObj.html(this.monthNames[this.month] + ' ' + this.year);

} // end showNextYear()

//
// bindHandlers() is a member function to bind event handlers for the widget
//
// @return N/A
//
datepicker.prototype.bindHandlers = function() {

   var thisObj = this;

   ////////////////////// bind button handlers //////////////////////////////////
   this.$prev.click(function(e) {
      return thisObj.handlePrevClick(e);
   });

   this.$next.click(function(e) {
      return thisObj.handleNextClick(e);
   });

   this.$prev.keydown(function(e) {
      return thisObj.handlePrevKeyDown(e);
   });

   this.$next.keydown(function(e) {
      return thisObj.handleNextKeyDown(e);
   });

   ///////////// bind grid handlers //////////////

   this.$grid.keydown(function(e) {
      return thisObj.handleGridKeyDown(e);
   });

   this.$grid.keypress(function(e) {
      return thisObj.handleGridKeyPress(e);
   });

   this.$grid.focus(function(e) {
      return thisObj.handleGridFocus(e);
   });

   this.$grid.blur(function(e) {
      return thisObj.handleGridBlur(e);
   });

   this.$grid.delegate('td', 'click', function(e) {
      return thisObj.handleGridClick(this, e);
   });

} // end bindHandlers();

//
// handlePrevClick() is a member function to process click events for the prev month button
//
// @input (e obj) e is the event object associated with the event
//
// @return (boolean) false if consuming event, true if propagating
//
datepicker.prototype.handlePrevClick = function(e) {

   var active = this.$grid.attr('aria-activedescendant');

   if (e.ctrlKey) {
      this.showPrevYear();
   }
   else {
      this.showPrevMonth();
   }

   if (this.currentDate == false) {
      this.$grid.attr('aria-activedescendant', 'day1');
   }
   else {
      this.$grid.attr('aria-activedescendant', active);
   }

   e.stopPropagation();
   return false;

} // end handlePrevClick()

//
// handleNextClick() is a member function to process click events for the next month button
//
// @input (e obj) e is the event object associated with the event
//
// @return (boolean) false if consuming event, true if propagating
//
datepicker.prototype.handleNextClick = function(e) {

   var active = this.$grid.attr('aria-activedescendant');

   if (e.ctrlKey) {
      this.showNextYear();
   }
   else {
      this.showNextMonth();
   }

   if (this.currentDate == false) {
      this.$grid.attr('aria-activedescendant', 'day1');
   }
   else {
      this.$grid.attr('aria-activedescendant', active);
   }

   e.stopPropagation();
   return false;

} // end handleNextClick()

//
// handlePrevKeyDown() is a member function to process keydown events for the prev month button
//
// @input (e obj) e is the event object associated with the event
//
// @return (boolean) false if consuming event, true if propagating
//
datepicker.prototype.handlePrevKeyDown = function(e) {

   if (e.altKey) {
      return true;
   }

   switch (e.keyCode) {
      case this.keys.tab: {
         if (this.bModal == false || !e.shiftKey || e.ctrlKey) {
            return true;
         }

         this.$grid.focus();
         e.stopPropagation();
         return false;
      }
      case this.keys.enter:
      case this.keys.space: {
         if (e.shiftKey) {
            return true;
         }

         if (e.ctrlKey) {
            this.showPrevYear();
         }
         else {
            this.showPrevMonth();
         }

         e.stopPropagation();
         return false;
      }
   }

   return true;

} // end handlePrevKeyDown()

//
// handleNextKeyDown() is a member function to process keydown events for the next month button
//
// @input (e obj) e is the event object associated with the event
//
// @return (boolean) false if consuming event, true if propagating
//
datepicker.prototype.handleNextKeyDown = function(e) {

   if (e.altKey) {
      return true;
   }

   switch (e.keyCode) {
      case this.keys.enter:
      case this.keys.space: {

         if (e.ctrlKey) {
            this.showNextYear();
         }
         else {
            this.showNextMonth();
         }

         e.stopPropagation();
         return false;
      }
   }

   return true;

} // end handleNextKeyDown()

//
// handleGridKeyDown() is a member function to process keydown events for the datepicker grid
//
// @input (e obj) e is the event object associated with the event
//
// @return (boolean) false if consuming event, true if propagating
//
datepicker.prototype.handleGridKeyDown = function(e) {

      var $rows = this.$grid.find('tbody tr');
      var $curDay = $('#' + this.$grid.attr('aria-activedescendant'));
      var $days = this.$grid.find('td').not('.empty');
      var $curRow = $curDay.parent();

      if (e.altKey) {
         return true;
      }

      switch(e.keyCode) {
         case this.keys.tab: {

            if (this.bModal == true) {
               if (e.shiftKey) {
                  this.$next.focus();
               }
               else {
                  this.$prev.focus();
               }
               e.stopPropagation()
               return false;
            }
            break;
         }
         case this.keys.enter:
         case this.keys.space: {

            if (e.ctrlKey) {
               return true;
            }

            // update the target box
            this.$target.val((this.month < 9 ? '0' : '') + (this.month+1) + '/' + $curDay.html() + '/' + this.year);

            // fall through
         }
         case this.keys.esc: {
            // dismiss the dialog box
            this.hideDlg();

            e.stopPropagation();
            return false;
         }
         case this.keys.left: {

            if (e.ctrlKey || e.shiftKey) {
               return true;
            }

            var dayIndex = $days.index($curDay) - 1;
            var $prevDay = null;

            if (dayIndex >= 0) {
               $prevDay = $days.eq(dayIndex);

               $curDay.removeClass('focus').attr('aria-selected', 'false');
               $prevDay.addClass('focus').attr('aria-selected', 'true');

               this.$grid.attr('aria-activedescendant', $prevDay.attr('id'));
            }
            else {
               this.showPrevMonth(0);
            }

            e.stopPropagation();
            return false;
         }
         case this.keys.right: {

            if (e.ctrlKey || e.shiftKey) {
               return true;
            }

            var dayIndex = $days.index($curDay) + 1;
            var $nextDay = null;

            if (dayIndex < $days.length) {
               $nextDay = $days.eq(dayIndex);
               $curDay.removeClass('focus').attr('aria-selected', 'false');
               $nextDay.addClass('focus').attr('aria-selected', 'true');

               this.$grid.attr('aria-activedescendant', $nextDay.attr('id'));
            }
            else {
               // move to the next month
               this.showNextMonth(1);
            }

            e.stopPropagation();
            return false;
         }
         case this.keys.up: {

            if (e.ctrlKey || e.shiftKey) {
               return true;
            }

            var dayIndex = $days.index($curDay) - 7;
            var $prevDay = null;

            if (dayIndex >= 0) {
               $prevDay = $days.eq(dayIndex);

               $curDay.removeClass('focus').attr('aria-selected', 'false');
               $prevDay.addClass('focus').attr('aria-selected', 'true');

               this.$grid.attr('aria-activedescendant', $prevDay.attr('id'));
            }
            else {
               // move to appropriate day in previous month
               dayIndex = 6 - $days.index($curDay);

               this.showPrevMonth(dayIndex);
            }

            e.stopPropagation();
            return false;
         }
         case this.keys.down: {

            if (e.ctrlKey || e.shiftKey) {
               return true;
            }

            var dayIndex = $days.index($curDay) + 7;
            var $prevDay = null;

            if (dayIndex < $days.length) {
               $prevDay = $days.eq(dayIndex);

               $curDay.removeClass('focus').attr('aria-selected', 'false');
               $prevDay.addClass('focus').attr('aria-selected', 'true');

               this.$grid.attr('aria-activedescendant', $prevDay.attr('id'));
            }
            else {
               // move to appropriate day in next month
               dayIndex = 8 - ($days.length - $days.index($curDay));

               this.showNextMonth(dayIndex);
            }

            e.stopPropagation();
            return false;
         }
         case this.keys.pageup: {
            var active = this.$grid.attr('aria-activedescendant');


            if (e.shiftKey) {
               return true;
            }


            if (e.ctrlKey) {
               this.showPrevYear();
            }
            else {
               this.showPrevMonth();
            }

            if ($('#' + active).attr('id') == undefined) {
               var lastDay = 'day' + this.calcNumDays(this.year, this.month);
               $('#' + lastDay).addClass('focus').attr('aria-selected', 'true');
            }
            else {
               $('#' + active).addClass('focus').attr('aria-selected', 'true');
            }

            e.stopPropagation();
            return false;
         }
         case this.keys.pagedown: {
            var active = this.$grid.attr('aria-activedescendant');


            if (e.shiftKey) {
               return true;
            }

            if (e.ctrlKey) {
               this.showNextYear();
            }
            else {
               this.showNextMonth();
            }

            if ($('#' + active).attr('id') == undefined) {
               var lastDay = 'day' + this.calcNumDays(this.year, this.month);
               $('#' + lastDay).addClass('focus').attr('aria-selected', 'true');
            }
            else {
               $('#' + active).addClass('focus').attr('aria-selected', 'true');
            }

            e.stopPropagation();
            return false;
         }
         case this.keys.home: {

            if (e.ctrlKey || e.shiftKey) {
               return true;
            }

            $curDay.removeClass('focus').attr('aria-selected', 'false');

            $('#day1').addClass('focus').attr('aria-selected', 'true');

            this.$grid.attr('aria-activedescendant', 'day1');

            e.stopPropagation();
            return false;
         }
         case this.keys.end: {

            if (e.ctrlKey || e.shiftKey) {
               return true;
            }

            var lastDay = 'day' + this.calcNumDays(this.year, this.month);

            $curDay.removeClass('focus').attr('aria-selected', 'false');

            $('#' + lastDay).addClass('focus').attr('aria-selected', 'true');

            this.$grid.attr('aria-activedescendant', lastDay);

            e.stopPropagation();
            return false;
         }
      }

      return true;

} // end handleGridKeyDown()

//
// handleGridKeyPress() is a member function to consume keypress events for browsers that
// use keypress to scroll the screen and manipulate tabs
//
// @input (e obj) e is the event object associated with the event
//
// @return (boolean) false if consuming event, true if propagating
//
datepicker.prototype.handleGridKeyPress = function(e) {

      if (e.altKey) {
         return true;
      }

      switch(e.keyCode) {
         case this.keys.tab:
         case this.keys.enter:
         case this.keys.space:
         case this.keys.esc:
         case this.keys.left:
         case this.keys.right:
         case this.keys.up:
         case this.keys.down:
         case this.keys.pageup:
         case this.keys.pagedown:
         case this.keys.home:
         case this.keys.end: {
            e.stopPropagation();
            return false;
         }
      }

      return true;

} // end handleGridKeyPress()

//
// handleGridClick() is a member function to process mouse click events for the datepicker grid
//
// @input (id obj) e is the id of the object triggering the event
//
// @input (e obj) e is the event object associated with the event
//
// @return (boolean) false if consuming event, true if propagating
//
datepicker.prototype.handleGridClick = function(id, e) {
   var $cell = $(id);

   if ($cell.is('.empty')) {
      return true;
   }

   this.$grid.find('.focus').removeClass('focus').attr('aria-selected', 'false');
   $cell.addClass('focus').attr('aria-selected', 'true');
   this.$grid.attr('aria-activedescendant', $cell.attr('id'));

   var $curDay = $('#' + this.$grid.attr('aria-activedescendant'));

   // update the target box
   this.$target.val((this.month < 9 ? '0' : '') + (this.month+1) + '/' + $curDay.html() + '/' + this.year);

   // dismiss the dialog box
   this.hideDlg();

   e.stopPropagation();
   return false;

} // end handleGridClick()

//
// handleGridFocus() is a member function to process focus events for the datepicker grid
//
// @input (e obj) e is the event object associated with the event
//
// @return (boolean) true
//
datepicker.prototype.handleGridFocus = function(e) {
   var active = this.$grid.attr('aria-activedescendant');

   if ($('#' + active).attr('id') == undefined) {
      var lastDay = 'day' + this.calcNumDays(this.year, this.month);
      $('#' + lastDay).addClass('focus').attr('aria-selected', 'true');
   }
   else {
      $('#' + active).addClass('focus').attr('aria-selected', 'true');
   }

   return true;

} // end handleGridFocus()

//
// handleGridBlur() is a member function to process blur events for the datepicker grid
//
// @input (e obj) e is the event object associated with the event
//
// @return (boolean) true
//
datepicker.prototype.handleGridBlur = function(e) {
   $('#' + this.$grid.attr('aria-activedescendant')).removeClass('focus').attr('aria-selected', 'false');

   return true;

} // end handleGridBlur()

//
// showDlg() is a member function to show the datepicker and give it focus. This function is only called if
// the datepicker is used in modal dialog mode.
//
// @return N/A
//
datepicker.prototype.showDlg = function() {

   var thisObj = this;

  // Bind an event listener to the document to capture all mouse events to make dialog modal
  $(document).bind('click mousedown mouseup mousemove mouseover', function(e) {

    //ensure focus remains on the dialog
    thisObj.$grid.focus();

    // Consume all mouse events and do nothing
    e.stopPropagation;
    return false;
  });

   // show the dialog
   this.$id.attr('aria-hidden', 'false');

   this.$grid.focus();

} // end showDlg()

//
// hideDlg() is a member function to hide the datepicker and remove focus. This function is only called if
// the datepicker is used in modal dialog mode.
//
// @return N/A
//
datepicker.prototype.hideDlg = function() {

   var thisObj = this;

  // unbind the modal event sinks
  $(document).unbind('click mousedown mouseup mousemove mouseover');

   // hide the dialog
   this.$id.attr('aria-hidden', 'true');

   // set focus on the focus target
   this.$target.focus();

} // end showDlg()
