import { http } from '@/plugins'

// - Request
export const request = (endpoint, params) => {

    return http.get(endpoint, {params}).then(response => response ? response.data : null)

}

// - Search
export const search = (params) => request(`fr/search/`, params)

// - Search
export const live = (params) => request(`fr/live/`, params)

// - Channels
export const channels = {

    // - All channels:
    all: (params) => request(`channels/`, params)
}


// - Menu
export const menu = {

    // - All menus:
    all: (params) => request(`menus/`, params),

    // - Singular menu:
    singular: (slug, params) => request(`menus/${slug}/`, params),

}

// - Archive
export const archive = {

    // - All author posts:
    author: (username, params) => request(`fr/authors/${username}/`, params),

    // - All Category posts:
    category: (slug, params) => request(`fr/categories/${slug}/`, params),

    // - All tag news:
    tag: (slug, params) => request(`fr/tags/${slug}/`, params)

}

// News
export const news = {

    // - Singular news:
    singular: (slug, params) => request(`fr/news/${slug}/`, params),

    // - Category news:
    category: (slug, params) => request(`fr/categories/${slug}/news/`, params),

    // - Latest news:
    latest: (params) => request(`fr/news/latest/`, params),

    // - Related news:
    related: (slug, params) => request(`fr/news/${slug}/related/`, params),

    // - Featured news:
    featured: (params) => request(`fr/news/featured/`, params),

    // - Breaking news:
    breaking: (params) => request(`fr/news/breaking/`, params)

}


// Videos
export const videos = {

    // - Singular videos:
    singular: () => {
    },

    // - Category videos:
    category: (slug, params) => request(`fr/categories/${slug}/videos/`, params),

    // - Latest videos:
    latest: (params) => request(`fr/videos/latest/`, params),

    // - Related videos:
    related: () => {
    },

}

// - settings
export const settings = {

    // - Home Blocks:
    homeBlocks: (params) => request(`fr/settings/home-blocks`, params)

}
