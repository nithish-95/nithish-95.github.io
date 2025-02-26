.PHONY: update

# Default commit message if none is provided
MSG ?= "Update files"

update:
	git add -u
	git commit -m "$(MSG)"
	git push
