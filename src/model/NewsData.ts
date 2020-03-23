export interface NewsData {
   newsObj: Array<{
        post_id: number,
        post_title: string,
        post_date: Date,
        post_createdby: string,
        post_content: string
   }>
}