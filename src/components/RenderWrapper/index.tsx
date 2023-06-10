import React from 'react'

import EmptyBanner from '../EmptyBanner'

interface RenderWrapperProps{
  children: React.ReactNode,
  conditionFail: boolean,
  conditionEmpty: boolean,
  altCompFail?: React.ReactNode,
  altCompEmpty?: React.ReactNode,
  empty?: {
    title: string,
    desc: string,
  },
  fail?: {
    title: string,
    desc: string,
  }
}

const RenderWrapper: React.FC<RenderWrapperProps> = ({ children, conditionFail, conditionEmpty, altCompEmpty, altCompFail, empty, fail }) => {
  return (
    <>
      {!conditionFail ?
        !conditionEmpty ?
          <>{children}</>
        :
          altCompEmpty ?
            <>{altCompEmpty}</>
          :
            <EmptyBanner
              title={empty?.title}
              desc={empty?.desc}
            />
      :
        altCompFail ?
          <>{altCompFail}</>
        :
          <EmptyBanner
            title={fail?.title}
            desc={fail?.desc}
          />
      }
    </>
  )
}

export default RenderWrapper