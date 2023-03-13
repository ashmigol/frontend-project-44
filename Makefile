install: install-deps
	

run:
	node bin/brain-games.js

install-deps:
	
	npm ci

lint:
		npx eslint .


publish:
	npm publish --dry-run

