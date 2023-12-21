export const ADD_FAVORİTE="ADD_FAVORİTE"
export const REMOVE_FAVORİTE="REMOVE_FAVORİTE"

export const addFavorite=(movie)=>{
    return({type:ADD_FAVORİTE,payload:movie})
} 

export const removeFavorite=(movie)=>{
    return({type:REMOVE_FAVORİTE,payload:movie})
}