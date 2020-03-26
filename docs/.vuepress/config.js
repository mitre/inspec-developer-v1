// See https://github.com/vuejs/vuepress/issues/613 for below example code source
const dirTree = require('directory-tree');
const path = require('path');


// Returns an array of file basenames in subDirPath, due to the usage of
// __dirname paths must be relative to the path of the file running this
function sidebarChildren(subDirPath) 
{
    var files = [];
    dirTree(path.join('docs/', subDirPath)
          ,{extensions:/\.md/}
          ,(item, PATH) => files.push(item));

    // extract file basenames so we can sort by number
    files = files.map(children => {
        fileName = path.join.apply(null, children.path.split(path.sep).slice(2)).slice(0,-3)
        return /README/g.test(fileName) ? '' : fileName ;
    });

    console.error("sidebarData")
    console.error(files)
    
    // Text based file names go first
    files.sort(
        (a,b) => {
            if (Number(a) && Number(b))
            {
                return a - b;
            } else {
                return a.localeCompare(b);
            }
        } 
    ); 
    return files;
}

module.exports = {

    title: 'InSpec Profile Developers Course',
    description: "The MITRE InSpec Team's introduction to InSpec Profile Development",

    plugins: [
      "vuepress-bar"
    ],

    themeConfig: {
        sidebar: {
          '/course/': sidebarChildren('./course'),
          '/installation/': sidebarChildren('./installation')
        },
        sidebarDepth: 4,
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
                    }
                ],
            },
            {
                text: 'Resources',
                link: '/resources/',
            },
            {
                text: 'Contact',
                link: '/contact'
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
