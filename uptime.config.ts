const pageConfig = {
  // Title for your status page
  title: "CF主页-www.199881.xyz's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://www.199881.xyz', label: 'CF主页', highlight: true },
    { link: 'https://note.199881.xyz', label: '网络记事本', highlight: true },
    { link: 'https://RSS-d77.us.kg', label: 'RSS-d77', highlight: true },
    { link: 'https://img.199881.xyz', label: 'TG图床', highlight: true },
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
      id: 'douyin.free.nf',
      name: '抖音-douyin.free.nf',
      method: 'GET',
      target: 'https://douyin.free.nf/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://douyin.free.nf/',
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
      id: 'cloudreve.111178.xyz',
      name: 'cloudreve-cloudreve.111178.xyz',
      method: 'GET',
      target: 'https://cloudreve.111178.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://cloudreve.111178.xyz/',
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
      id: 'play.111178.xyz',
      name: '音乐-play.111178.xyz',
      method: 'GET',
      target: 'https://play.111178.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://play.111178.xyz/',
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
      name: '哪吒探针-nz.bjj.us.kg',
      method: 'GET',
      target: 'https://nz.bjj.us.kg/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://nz.bjj.us.kg/',
      timeout: 10000,
    },
      {
      id: '9527.us.kg',
      name: '抖音-9527.us.kg',
      method: 'GET',
      target: 'https://9527.us.kg/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://9527.us.kg/',
      timeout: 10000,
    },

      {
      id: 'note.199881.xyz',
      name: '网络记事本-note.199881.xyz',
      method: 'GET',
      target: 'https://note.199881.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://note.199881.xyz/',
      timeout: 10000,
    },
      {
      id: 'url.199881.xyz/dlj',
      name: '短链接1-url.199881.xyz',
      method: 'GET',
      target: 'https://url.199881.xyz/dlj',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://url.199881.xyz/dlj',
      timeout: 10000,
    },
      {
      id: 'img.199881.xyz',
      name: 'TG图床-img.199881.xyz',
      method: 'GET',
      target: 'https://img.199881.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://img.199881.xyz/',
      timeout: 10000,
    },


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
