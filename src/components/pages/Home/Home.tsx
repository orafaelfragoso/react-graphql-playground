import React from 'react'

import { Home as HomeTemplate } from '@templates/Home'
import { Hero } from '@organisms/Hero'

export const Home: React.FC = () => <HomeTemplate content={<Hero />} />
