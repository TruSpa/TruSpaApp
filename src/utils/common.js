import commonData from '@/data/common.json'

function comData() {
    return { data: commonData }
}

function getImageUrl(name) {
    const imgUrl = new URL(name, import.meta.url).href
    return imgUrl
}

export default {
    comData,
    getImageUrl
}
