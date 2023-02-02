export const ApiRequest = async (url = '', optionsObj: any = null, errMsg: Error | null = null) => {
    try {
        const response = await fetch(url, optionsObj)
        if (!response.ok) throw Error('Please reload the app,something went wrong')
    } catch (error: any) {
        errMsg = error.message
    } finally {
        return errMsg
    }
}