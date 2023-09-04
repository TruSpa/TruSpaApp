import serviceData from '@/data/services.json'

function getData() {
    const data = Object.values(serviceData);
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
