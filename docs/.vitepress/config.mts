import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/2025-1-XS',
  title: "Fablab",
  description: "An interesting trial",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Aboutme', link: '/About me/aboutme.md' },
      { text: 'Coursework', 
        items: [
          { text: 'Project management', link: '/Coursework/pm.md' },
          { text: 'CAD modeling', link: '/Coursework/cad.md' }
        ]

      }
    ],

    sidebar: [
      {
        text: 'Coursework',
        items: [
          { text: 'Project management', link: '/Coursework/pm.md' },
          { text: 'CAD modeling', link: '/Coursework/cad.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
