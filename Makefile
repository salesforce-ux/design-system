updatedependencies:
	@echo "How to add or remove npm dependencies:"
	@echo "https://github.com/salesforce-ux/design-system-internal/wiki/How-to-install-or-remove-npm-dependencies"
	npm cache clear
	rm -f npm-shrinkwrap.json
	rm -Rf node_modules
	# Remove this next line when this issue is fixed:
	# https://github.com/dequelabs/axe-webdriverjs/issues/17
	npm install axe-core@~2.0.5
	npm install
	npm shrinkwrap
	clingwrap npmbegone
	npm run build
	npm test
	git add npm-shrinkwrap.json package.json
	@echo "Dependency tree updated!"
	@echo "To commit, type: git commit -m 'Update dependencies'"

.PHONY: updatedependencies
