interface AppConfig {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfig = {
    name: "Smart Park",
    github: {
        title: "Smart Park",
        url: "https://github.com/douglasgls",
    },
    author: {
        name: "Douglas",
        url: "https://github.com/douglasgls/",
    }
}