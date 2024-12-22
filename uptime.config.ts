const pageConfig = {
  // Title for your status page
  title: "CF主页-www.199881.xyz's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://www.199881.xyz', label: 'CF主页', highlight: true },
    { link: 'https://nav.211119.xyz/', label: 'nav主页', highlight: true },
    { link: 'https://dh.9527.nyc.mn/', label: '9527主页', highlight: true },
    { link: 'https://note.199881.xyz', label: '网络记事本', highlight: true },
    { link: 'https://d77.us.kg', label: 'RSS-d77', highlight: true },
    { link: 'https://img.199881.xyz', label: 'TG图床', highlight: true },
    { link: 'https://img.mypi.co/', label: 'mypi图床', highlight: true },
    { link: 'https://douyin.mypi.co/', label: 'mypi抖音', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'boke.199881.xyz',
      // `name` is used at status page and callback message
      name: '个人博客',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://boke.199881.xyz/',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://boke.199881.xyz/',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      // expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      // headers: {
      //   'User-Agent': 'Uptimeflare',
      //   Authorization: 'Bearer YOUR_TOKEN_HERE',
      // },
      // [OPTIONAL] body to be sent
      // body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      // responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
      // checkLocationWorkerRoute: 'https://am.809098.xyz',
    },
    // Example TCP Monitor
    {
      id: 'wsone.us.kg',
      name: 'cf主页-wsone.us.kg',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://wsone.us.kg',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://wsone.us.kg',
      timeout: 10000,
    },
    {
      id: 'cn88.viphost.vip',
      name: '新主页-cn88.viphost.vip',
      method: 'GET',
      target: 'https://cn88.viphost.vip',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://cn88.viphost.vip',
      timeout: 10000,
    },
    {
      id: 'aakk.nyc.mn',
      name: '主页-aakk.nyc.mn',
      method: 'GET',
      target: 'https://aakk.nyc.mn',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://aakk.nyc.mn',
      timeout: 10000,
    },
      {
      id: 'play.111178.xyz',
      name: '音乐-play.111178.xyz',
      method: 'GET',
      target: 'https://play.111178.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://play.111178.xyz/',
      timeout: 10000,
    },
      {
      id: 'douyin.mypi.co',
      name: '抖音1-douyin.mypi.co',
      method: 'GET',
      target: 'https://douyin.mypi.co/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://douyin.mypi.co/',
      timeout: 10000,
    },
      {
      id: 'img.mypi.co',
      name: 'mypi图床-img.mypi.co',
      method: 'GET',
      target: 'https://img.mypi.co/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://img.mypi.co/',
      timeout: 10000,
    },
    {
      id: '9527.nyc.mn',
      name: '抖音2-9527.nyc.mn',
      method: 'GET',
      target: 'https://9527.nyc.mn/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://9527.nyc.mn/',
      timeout: 10000,
    },
      {
      id: '9527.us.kg',
      name: '抖音3-9527.us.kg',
      method: 'GET',
      target: 'https://9527.us.kg/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://9527.us.kg/',
      timeout: 10000,
    },
      {
      id: 'd77.us.kg',
      name: 'RSS-d77.us.kg',
      method: 'GET',
      target: 'https://d77.us.kg/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://d77.us.kg/',
      timeout: 10000,
    },
      {
      id: 'nav.211119.xyz',
      name: '主页-nav.211119.xyz',
      method: 'GET',
      target: 'https://nav.211119.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://nav.211119.xyz/',
      timeout: 10000,
    },
      {
      id: 't2v.111178.xyz',
      name: '文本转语音-t2v.111178.xyz',
      method: 'GET',
      target: 'https://t2v.111178.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://t2v.111178.xyz/',
      timeout: 10000,
    },
      {
      id: 'jiexi.111178.xyz',
      name: '视频解析-jiexi.111178.xyz',
      method: 'GET',
      target: 'https://jiexi.111178.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://jiexi.111178.xyz/',
      timeout: 10000,
    },
      {
      id: 'ddyy.us.kg',
      name: 'vps计算器-ddyy.us.kg',
      method: 'GET',
      target: 'https://ddyy.us.kg/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://ddyy.us.kg/',
      timeout: 10000,
    },
      {
      id: 'nz.bjj.us.kg',
      name: '哪吒探针1-nz.bjj.us.kg',
      method: 'GET',
      target: 'https://nz.bjj.us.kg/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://nz.bjj.us.kg/',
      timeout: 10000,
    },
      {
      id: 'nz.211119.xyz',
      name: '哪吒探针2-nz.211119.xyz',
      method: 'GET',
      target: 'https://nz.211119.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://nz.211119.xyz/',
      timeout: 10000,
    },
    {
      id: 'boke.rf.gd',
      name: 'free博客-boke.rf.gd',
      method: 'GET',
      target: 'https://boke.rf.gd/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://boke.rf.gd/',
      timeout: 10000,
    },
      {
      id: 'keplu.eu.org',
      name: 'vps计算器-keplu.eu.org',
      method: 'GET',
      target: 'https://keplu.eu.org/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://keplu.eu.org/',
      timeout: 10000,
    },
      {
      id: 'pass.keplu.eu.org',
      name: '密码和UUID-pass.keplu.eu.org',
      method: 'GET',
      target: 'https://pass.keplu.eu.org/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://pass.keplu.eu.org/',
      timeout: 10000,
    },
      {
      id: 'webmail.211119.xyz',
      name: '21119邮箱-webmail.211119.xyz',
      method: 'GET',
      target: 'https://webmail.211119.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://webmail.211119.xyz/',
      timeout: 10000,
    },
      {
      id: 'edgesub.d77.us.kg',
      name: '订阅转换-edgesub.d77.us.kg',
      method: 'GET',
      target: 'https://edgesub.d77.us.kg/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://edgesub.d77.us.kg/',
      timeout: 10000,
    },
    
    {
      id: 'img.9527.us.kg',
      name: 'TG图床-img.9527.us.kg',
      method: 'GET',
      target: 'https://img.9527.us.kg/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://img.9527.us.kg/',
      timeout: 10000,
    }

  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
