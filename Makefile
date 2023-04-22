install: install-deps
	
run:
	node bin/brain-games.js
	node bin/brain-even.js
	node bin/brain-calc.js
	node bin/brain-gcd.js
	node bin/brain-prime.js
	node bin/brain-progression.js

install-deps:
	
	npm ci

lint:
		npx eslint .


publish:
	npm publish --dry-run

