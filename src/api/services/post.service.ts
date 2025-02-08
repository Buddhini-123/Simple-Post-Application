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
    try {
      const response = await PostRequests.getAllPosts();
      return response || [];
    } catch (error) {
      console.error("Error fetching all posts:", error);
      throw error;
    }
  }

  public async getPostById(id: string) {
    try {
      const response = await PostRequests.getPostById(id);
      return response || [];
    } catch (error) {
      console.error(`Error fetching post ${id}:`, error);
      throw error;
    }
  }
  
}
export default PostApi
