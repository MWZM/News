import Vue from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

Vue.filter('Revisiontime', function (time) {
  return dayjs().to(dayjs(time))
})
