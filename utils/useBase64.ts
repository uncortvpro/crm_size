export function useBase64(img: string) {
    if(typeof img !== 'string') return false;
    
    return 'data:image/png;base64,' + img;
}
  