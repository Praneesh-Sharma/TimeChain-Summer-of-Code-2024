export async function load({params}){
    
    // const data = $(params.slug)
    return {
        content: `hello ${params.slug}`
    }
}