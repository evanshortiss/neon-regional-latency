
export type PlatformName = 'vercel' | 'railway' | 'fly' | 'digitalocean'
export type PlatformRegionsNamesMap = {
  [platformName in PlatformName]: {
    [platformRegion: string]: string
  }
}

export type NeonRegion = "us-east-1.aws.neon.tech" | "us-east-2.aws.neon.tech" | "us-west-2.aws.neon.tech"
export type NeonRegionsNamesMap = {
  [neonRegion in NeonRegion]: string
}

export const neonRegionSortOrder: NeonRegion[] = [
  'us-east-1.aws.neon.tech',
  'us-west-2.aws.neon.tech',
  'us-east-2.aws.neon.tech',
]

export const platformNames: PlatformName[] = ['vercel', 'railway', 'fly', 'digitalocean']
export const platformNamesFormatted: { [key in PlatformName]: string } = {
  'vercel': 'Vercel',
  'railway': 'Railway',
  'fly': 'Fly',
  'digitalocean': 'DigitalOcean'
}

export const platformRegionsToNames: PlatformRegionsNamesMap = {
  'vercel': {
    iad1: "Washington D.C.",
  },
  'railway': {
    "us-west1": "US West (Oregon, USA)",
    'us-east4': 'US East (Virginia, USA)'
  },
  'fly': {
    bos: 'Boston',
    iad: "Ashburn, Virginia (US)",
    lax: "Los Angeles",
    sea: "Seattle",
  },
  'digitalocean': {
    nyc: "New York City (New York, USA)",
  }
}

export const neonRegionsToNames: NeonRegionsNamesMap = {
  "us-east-1.aws.neon.tech": "US East (N. Virginia)",
	"us-east-2.aws.neon.tech": "US East (Ohio)",
	"us-west-2.aws.neon.tech": "US West (Oregon)"
}
