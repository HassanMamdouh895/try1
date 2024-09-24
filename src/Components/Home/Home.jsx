import Avatar from 'avataaars'

export default function Home() {

//  virtual Dom
  return (
    <>
    <div className='bg-green-400'>
    <div className='flex justify-center items-center flex-col h-screen'>
      <div>
    <Avatar
          style={{width: '300px', height: '300px'}}
          avatarStyle='Circle'
          topType='ShortHairShortFlat'
          accessoriesType='blank'
          hairColor='BrownDark'
          facialHairType='BeardMajestic'
          clotheType='Hoodie'
          clotheColor='PastelBlue'
          eyeType='Happy'
          eyebrowType='Default'
          mouthType='Smile'
          skinColor='Light'
        />
    </div>
    <div>
      <h1 className='text-4xl font-semibold whitespace-nowrap text-white pt-8'>Start Framework</h1>
      
    </div>
    <div className='flex justify-center items-center pt-4'>
      <div className='h-1 bg-white w-20'></div>
      <i className='fa-solid px-4 text-white  fa-star'></i>
      <div className='h-1 bg-white w-20'></div>
      </div>
    </div>
    
    
    </div>

    </>
  )
}


