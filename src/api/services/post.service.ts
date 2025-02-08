import * as PostRequests from '../endpoints/post.endpoints.ts'

class PostApi {
  private static instance: PostApi

  public static postApi(): PostApi {
    if (!PostApi.instance) {
        PostApi.instance = new PostApi()
    }
    return this.instance
  }

  public async getAllPosts() {
    const response = await PostRequests.getAllPosts()
    
    return response || []
  }

  public async getPostById(id: string) {
    const response = await PostRequests.getPostById(id)
    return response || []
  }
  
}
export default PostApi
