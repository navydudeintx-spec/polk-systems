Polk Systems Website Deploy Notes
=================================

Local repo location:
C:\Users\navyd_1sjitwl\Documents\site\Polk-Systems

Server deploy location:
C:\inetpub\vhosts\polk-systems.com\httpdocs

Preferred workflow:
- Make website content/code changes in the local repo on your computer.
- Test locally first.
- Commit and push from the local repo.
- Deploy those changes to the server using deploy-safe.cmd.

Normal page/content changes on server:
cmd /d /c "pushd C:\inetpub\vhosts\polk-systems.com\httpdocs && call deploy-safe.cmd"

Full install deploy on server (only when package dependencies changed):
cmd /d /c "pushd C:\inetpub\vhosts\polk-systems.com\httpdocs && call deploy-safe.cmd full"

Build-only script used by safe deploy:
deploy-buildonly.cmd

Full install script used by safe deploy:
deploynext.cmd

Disabled for normal use:
processchanges.cmd

Source of truth:
- Computer repo + GitHub = source of truth
- Server httpdocs = deployed working copy

Server edits:
- Avoid direct server edits when possible.
- If an emergency fix is made on the server, copy that change back into the local repo before the next normal deploy from the computer.
- Do not assume the server folder is a Git repo.
- Do not run git init in httpdocs.

Rules:
- Use deploy-safe.cmd for normal website edits.
- Use deploy-safe.cmd full only when package.json or package-lock.json changed.
- Do not use processchanges.cmd for normal edits.
- Do not use deploynext.cmd directly unless a full install deploy is required.

Verification:
- Home page: https://www.polk-systems.com/
- Brain page: https://www.polk-systems.com/brain
- Solutions page: https://www.polk-systems.com/solutions
