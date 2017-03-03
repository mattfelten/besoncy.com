## besoncy.com Website
This is the repository for the [Jekyll](http://jekyllrb.com) build for our website. It is a static site and is compiled locally. Read the docs to find out all the cool stuff Jekyll can do.

### Install
Install Ruby Gems

    bundle

If `bundle` fails, you might need to install [RVM](http://rvm.io) and update your system Ruby

    \curl -sSL https://get.rvm.io | bash -s stable
    rvm install ruby-2.0.0-p451

Then try running `bundle` again

Have a beer. You're ready to go.

### Deploy
There is a `_tasks` directory with a deploy script. Run `bash _tasks/deploy` to build the site, backup the live site, and push new files. Make sure you keep an eye on what is being deleted.
