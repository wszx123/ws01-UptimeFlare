const pageConfig = {
  // Title for your status page
  title: "CF主页-www.199881.xyz's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://211119.xyz/', label: '211119主页', highlight: true },
    { link: 'https://d77.211119.xyz/', label: 'RSS-d77', highlight: true },
    { link: 'https://boke.199881.xyz/', label: 'ws01博客', highlight: true },
    { link: 'https://music.9527.nyc.mn/', label: 'cf-音乐', highlight: true },
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
      id: 'cc-抖音',
      // `name` is used at status page and callback message
      name: 'cc-抖音',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://88.mypi.co/',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://88.mypi.co/',
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
      id: '111178.xyz',
      name: '专用主页-111178.xyz',
      method: 'GET',
      target: 'https://111178.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://111178.xyz/',
      timeout: 10000,
    },
      {
      id: 'dh.211119.xyz',
      name: '主页-dh.211119.xyz',
      method: 'GET',
      target: 'https://dh.211119.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://dh.211119.xyz/',
      timeout: 10000,
    },
      {
      id: 'dh.mbb.qzz.io',
      name: '新主页-dh.mbb.qzz.io',
      method: 'GET',
      target: 'https://dh.mbb.qzz.io/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://dh.mbb.qzz.io/',
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
      id: 'zzq.211119.xyz',
      name: 'cf主页-zzq.211119.xyz',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://zzq.211119.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://zzq.211119.xyz/',
      timeout: 10000,
    },
    {
      id: 'boke.us.to',
      name: '博客-boke.us.to',
      method: 'GET',
      target: 'https://boke.us.to/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://boke.us.to',
      timeout: 10000,
    },
    {
      id: 'boke.mypi.co',
      name: '博客-boke.mypi.co',
      method: 'GET',
      target: 'https://boke.mypi.co/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://boke.mypi.co',
      timeout: 10000,
    },
    {
      id: 'blog.mbb.qzz.io',
      name: 'CF博客-blog.mbb.qzz.io',
      method: 'GET',
      target: 'https://blog.mbb.qzz.io/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://blog.mbb.qzz.io/',
      timeout: 10000,
    },
    {
      id: 'wszx.us.to',
      name: '邮箱-wszx.us.to',
      method: 'GET',
      target: 'https://wszx.us.to/login',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://wszx.us.to/login',
      timeout: 10000,
    },
      {
      id: 'libretv.18k.dpdns.org',
      name: 'libretv视频-libretv.18k.dpdns.org',
      method: 'GET',
      target: 'https://libretv.18k.dpdns.org/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://libretv.18k.dpdns.org/',
      timeout: 10000,
    },
    {
      id: 'moontv.18k.dpdns.org',
      name: 'moontv视频-moontv.18k.dpdns.org',
      method: 'GET',
      target: 'https://moontv.18k.dpdns.org/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://moontv.18k.dpdns.org',
      timeout: 10000,
    },
      id: '18k.dpdns.org',
      name: '18k视频-18k.dpdns.org',
      method: 'GET',
      target: 'https://18k.dpdns.org/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://18k.dpdns.org/',
      timeout: 10000,
    },
    {
      id: 'img.boke.us.to',
      name: '图床-img.boke.us.to',
      method: 'GET',
      target: 'https://img.boke.us.to/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://img.boke.us.to/',
      timeout: 10000,
    },
    {
      id: 'img.keplu.eu.org',
      name: '图床-img.keplu.eu.org',
      method: 'GET',
      target: 'https://img.keplu.eu.org/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://img.keplu.eu.org/',
      timeout: 10000,
    },
      {
      id: 'ngohome.eu.org',
      name: 'ngohome图床-ngohome.eu.org',
      method: 'GET',
      target: 'https://ngohome.eu.org/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://ngohome.eu.org/',
      timeout: 10000,
    },
      {
      id: 'hao.xh.sd',
      name: 'ws01-hao.xh.sd',
      method: 'GET',
      target: 'https://hao.xh.sd/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://hao.xh.sd/',
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
      id: 'mbb.qzz.io',
      name: '订阅管理-mbb.qzz.io',
      method: 'GET',
      target: 'https://mbb.qzz.io/9527kkk/login',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://mbb.qzz.io/9527kkk/login',
      timeout: 10000,
    },
      {
      id: 'vps.211119.xyz',
      name: 'vps信息-vps.211119.xyz',
      method: 'GET',
      target: 'https://vps.211119.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://vps.211119.xyz/',
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
      id: 'jsq.211119.xyz',
      name: 'vps计算器-jsq.211119.xyz',
      method: 'GET',
      target: 'https://jsq.211119.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://jsq.211119.xyz/',
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
      id: 'eyei.eu.org',
      name: '简易记事本-eyei.eu.org',
      method: 'GET',
      target: 'https://eyei.eu.org/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://eyei.eu.org/',
      timeout: 10000,
    },
    {
      id: 'note.211119.xyz',
      name: '记事本-note.211119.xyz',
      method: 'GET',
      target: 'https://note.211119.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://note.211119.xyz/',
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
