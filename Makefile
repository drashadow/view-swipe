REPORTER = spec

test:
		@./node_modules/.bin/mocha \
			--reporter $(REPORTER) \
			./test/swipe.js

.PHONY: test