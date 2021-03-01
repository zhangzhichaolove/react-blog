function getUser() {
    const userInfo = localStorage.getItem('userInfo')
    return userInfo ? JSON.parse(userInfo || '{}') : ''
}

export { getUser }