import hourData from '@/data/contactUs.json'

function getData() {
    return { data: hourData }
}

function getOpenningHour() {
    return { data: getData().data.openning_hour }
}

function beautifyNum(num){
    return num.slice(0,4) + " " + num.slice(4);
}

export default {
    getOpenningHour,
    getData,
    beautifyNum
}


