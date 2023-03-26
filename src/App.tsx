import React from 'react';
import './App.css';

import useBreakpoints from './hooks/useBreakpoints';
import Card from './components/Card';

function App() {

  const { currentBreakpoint } = useBreakpoints()

  return (
    <div className="flex flex-col gap-4 py-8">
      <div className='flex flex-col gap-4 w-[70rem] mx-auto max-w-[95%]'>
        <h1 className='font-bold text-4xl text-center'>Valkyrie List</h1>
        <div className='flex justify-around flex-wrap gap-4 gap-y-6'>
          <Card
            title='Herrscher of Reason'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, distinctio!'
            onEdit={() => console.log("Edit Card")}
            onDelete={() => console.log("Delete Card")}
            type="MEC"
            minimized={currentBreakpoint === "sm"}
          />
          <Card
            title='Herrscher of Thunder'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sint sequi atque corrupti sed nam omnis soluta, velit perferendis harum.'
            onEdit={() => console.log("Edit Card")}
            onDelete={() => console.log("Delete Card")}
            type="PSY"
            minimized={currentBreakpoint === "sm"}
          />
          <Card
            title='Herrscher of Sentience'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error aut porro beatae facere maxime, voluptas est ipsum? Repellat tempore amet, magnam vero laudantium dolores impedit tenetur placeat ipsa numquam eveniet!'
            onEdit={() => console.log("Edit Card")}
            onDelete={() => console.log("Delete Card")}
            type="BIO"
            minimized={currentBreakpoint === "sm"}
          />
          <Card
            title='Stygan Nymph'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis harum, ipsa dolorem ab, distinctio amet, rem tempore vel facilis eum numquam id incidunt. Laudantium commodi, qui dolore ipsa molestias, consequuntur reiciendis obcaecati iusto reprehenderit ipsum omnis eligendi possimus est laborum?'
            onEdit={() => console.log("Edit Card")}
            onDelete={() => console.log("Delete Card")}
            type="QUA"
            minimized={currentBreakpoint === "sm"}
          />
          <Card
            title='Herrscher of Finality'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus unde quia magnam fugiat adipisci cum. Nesciunt alias, aut architecto accusantium quasi sequi, quam inventore eos veniam quo aliquid, adipisci hic nihil. Sunt, veritatis! Iusto atque quae, labore saepe a sapiente doloremque, enim, nulla consequuntur vero aut possimus quas doloribus.'
            onEdit={() => console.log("Edit Card")}
            onDelete={() => console.log("Delete Card")}
            type="IMG"
            minimized={currentBreakpoint === "sm"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
