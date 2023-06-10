import { useCallback, useState, useMemo, createContext } from 'react';
import './App.css';

import useBreakpoints, { Breakpoints } from './hooks/useBreakpoints';
import { useGetValksQuery } from './services/valkApi';
import { Valkyrie } from './services/valkApi/types';

import Card from './components/Card';
import BaseModal from './components/Modal';
import BaseTemplate from './components/BaseTemplate';
import Dragndrop from './components/Dragndrop';
import RenderWrapper from './components/RenderWrapper';
import AddValk from './components/AddValk';

interface AppContextProps{
  currentBreakpoint?: Breakpoints,
}

export const AppContext = createContext<AppContextProps>({})

function App() {

  const { currentBreakpoint } = useBreakpoints()

  const { data: valks, isLoading, isError } = useGetValksQuery(undefined)
  const [isCardDetailModalVisible, setIsCardDetailModalVisible] = useState(false)
  const [highlightedValkId, setHighlightedValkId] = useState<string | null>(null)

  const highlightedValk = useMemo(() => {
    if(!valks) return undefined

    for(let valkRow of valks){
      for(let valk of valkRow){
        if(valk.id === highlightedValkId){
          return valk
        }
      }
    }

    return undefined
  }, [valks, highlightedValkId])

  const onMinimizedCardClick = useCallback((valk: Valkyrie) => {
    setIsCardDetailModalVisible(true)
    setHighlightedValkId(valk.id)
  }, [])

  return (
    <BaseTemplate isLoading={isLoading}>
      <AppContext.Provider value={{
        currentBreakpoint: currentBreakpoint,
      }}>
        <div className="flex flex-col gap-4 py-8">
          <div className='flex flex-col gap-4 w-[70rem] mx-auto max-w-[95%]'>
            <h1 className='font-bold text-4xl text-center'>Valkyrie List</h1>
            <RenderWrapper conditionEmpty={Number(valks?.length) === 0} conditionFail={isError}
              empty={{
                title: "Valk data is empty",
                desc: "You can add more data by clicking the button below"
              }}
              fail={{
                title: "Error while fetching data",
                desc: "Please try again later" 
              }}
            >
              <div className='flex flex-col gap-4'>
                {valks?.map((row, index) => (
                  <Dragndrop key={index} list={row} onMinimizedCardClick={onMinimizedCardClick}/>
                ))}
              </div>
            </RenderWrapper>
            <AddValk/>
          </div>
        </div>
        <BaseModal isVisible={isCardDetailModalVisible} onClose={() => setIsCardDetailModalVisible(false)}>
          {highlightedValk ?
            <Card
              valk={highlightedValk}
            />
          :
            <></>
          }
        </BaseModal>
      </AppContext.Provider>
    </BaseTemplate>
  );
}

export default App;
