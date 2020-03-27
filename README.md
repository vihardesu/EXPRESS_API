# Express API Production Environment for Heroku

This is a staging system for express projects.

---

Assumes You Have:
1. heroku cli
2. npm / node
3. git


## Quick Start
```
$ git clone [url]
$ heroku create
$ git push heroku master
$ heroku open
```

---
## Version Control Workflow Flow

### Create a Branch -> Make Edits -> Stage/Commit -> Test Branch for Production on Heroku
```
$ git checkout -b [name]
$ git add .
$ git commit -m 'message'
$ git checkout -b [name]
```

### Once Code is Production Ready -> Push Branch to Master and Deploy by:
#### Overwriting Master with Staged Branch *be sure you are done and it's working as intended here*
```
$ git checkout -b [branch_new]
$ git add .
$ git commit -m 'message'
$ git merge -s ours [branch_old]
$ git checkout branch_old
$ git merge branch_new
$ git add .
$ git commit -m 'new changes'
$ git push origin [old branch]
$ git branch -d [new branch]
```

#### Deploy Master Branch to Heroku
```
$ git checkout master
$ git push heroku master
```
---

View Heroku Production Environment Variables
```
$ heroku run printenv
```

