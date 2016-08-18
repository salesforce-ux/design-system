updatedependencies:
	@echo "How to add or remove npm dependencies:"
	@echo "https://github.com/salesforce-ux/design-system-internal/wiki/How-to-install-or-remove-npm-dependencies"
	npm cache clear
	rm -f npm-shrinkwrap.json
	rm -Rf node_modules
	npm install
	npm shrinkwrap
	clingwrap npmbegone
	npm test
	git add npm-shrinkwrap.json package.json
	@echo "Dependency tree updated, ready to commit!"

.PHONY: updatedependencies
