install: install-deps
	

run:
	node bin/brain-games.js
	node bin/brain-even.js
	node bin/brain-calc.js

install-deps:
	
	npm ci

lint:
		npx eslint .


publish:
	npm publish --dry-run

