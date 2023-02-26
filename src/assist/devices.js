const Devices = () => { 
  //Разрешение экрана 
  const screenResolutionTablet = 768,
        screenResolutionHD = 1366,
        screenResolutionFullHD = 1920,
        windowInnerWidth = window.innerWidth;

  if(windowInnerWidth < screenResolutionTablet) return 'mobile'
  else if(windowInnerWidth >= screenResolutionTablet && windowInnerWidth < screenResolutionHD) return 'tablet'
  else if(windowInnerWidth >= screenResolutionHD && windowInnerWidth < screenResolutionFullHD) return 'hd'
  else if(windowInnerWidth >= screenResolutionFullHD) return 'full-hd'
}

export default Devices;