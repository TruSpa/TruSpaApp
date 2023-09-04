import therapistsData from '@/data/therapists.json'

function getData() {
    const data = Object.values(therapistsData);
    return data;
}

function getImageUrl(name) {
    const imgUrl = new URL(name, import.meta.url).href
    return imgUrl
}

export default {
    getData,
    getImageUrl
}
