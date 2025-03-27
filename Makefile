.PHONY: update clean status

# Default commit message if none is provided
MSG ?= "Update files"

# Git repository path (optional, if different from current directory)
GIT_REPO ?= .

update: status
	@git add . $(GIT_REPO)
	@git commit -m "$(MSG)" || exit 1
	@git push || exit 1
	@echo "Successfully updated and pushed changes."

# Add a 'clean' target to remove untracked files and reset changes
clean:
	@git clean -fd $(GIT_REPO)
	@git reset --hard $(GIT_REPO)
	@echo "Cleaned git repository"


#Status target to check the status of repository before updateing
status:
	@git status
	@echo "Check the git status before continuing."

#Add help target for documentation.
help:
	@echo "Available targets:"
	@echo "  update: Adds, commits, and pushes changes.  Use 'make update MSG=\"Your commit message\"'."
	@echo "  clean: Removes untracked files and resets to last commit. USE WITH CAUTION!"
	@echo "  status: Display the current status of your git repository."
	@echo "  help: Show this help message."

