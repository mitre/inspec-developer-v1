// See https://github.com/vuejs/vuepress/issues/613 for below example code source
const dirTree = require('directory-tree');
const path = require('path');

var courses = [];
dirTree(path.join(__dirname, '../course'), {extensions:/\.md/}, (item, PATH) => courses.push(item));
courses = courses.map(children => {
    return path.parse(children.name).name  !== 'README' ? 
      path.join.apply(null, children.path.split(path.sep).slice(7)) : 
      path.join.apply(null, children.path.split(path.sep).slice(7)).replace('README.md', '');
});

console.log(courses);
module.exports = {

    title: 'InSpec Profile Developers Course',
    description: "The MITRE InSpec Team's introduction to InSpec Profile Development",

    plugins: [
      "vuepress-bar"
    ],

    themeConfig: {
        sidebar: {
          '/course/': courses
        },
        navbar: 'auto',
        nav: [{
                text: 'Course',
                link: '/course/'
            },
            {
                text: 'Install',
                items: [{
                        text: 'Linux',
                        link: '/installation/LinuxInstall.md'
                    },
                    {
                        text: 'Mac',
                        link: '/installation/MacInstall.md'
                    },
                    {
                        text: 'Windows',
                        link: '/installation/WindowsInstall.md'
                    },
                    {
                        text: 'Vagrant Install',
                        link: '/installation/vagrant_install.md'
                    }
                ],
            },
            {
                text: 'Resources',
                link: '/resources/',
            },
            {
                text: 'Contact',
                link: 'contact.md'
            },
        ],
    },
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: true,
        },
        // options for markdown-it-toc
        toc: {
            includeLevel: [1, 2]
        },
    }
}
