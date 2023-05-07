

function Footer() {

  
  const today = new Date();

  
  return (
    <footer className="flex flex-row justify-center items-center text-white text-sm font-bold mt-16">
      
      
          <h4>Endy - {today.getFullYear()}</h4>
       
    </footer>
  )
}

export default Footer