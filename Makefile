install: install-deps
	npm ci

run:
	node bin/brain-games.js
	npm publish --dry-run

