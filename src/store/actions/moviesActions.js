export const NEXT="NEXT"
export const PREV="PREV"
export const REMOVE_MOVİE="REMOVE_MOVİE"
export const RESTORE_MOVİE="RESTORE_MOVİE"

export const next=()=>{
    return {type:NEXT}
}

export const prev=()=>{
    return ({type:PREV})
}

export const removeMovie=(movie)=>{
    return ({type:REMOVE_MOVİE,payload:movie})
}

export const restoreMovie=(movie)=>{
    return ({type:RESTORE_MOVİE,payload:movie})
}

