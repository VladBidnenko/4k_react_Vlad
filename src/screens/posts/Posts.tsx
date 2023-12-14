import { useAppDispatch } from "@app/redux/configureStore";
import { increasePage } from "@app/redux/article/article.slice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPost } from "@app/redux/article/article.thunk";
import { ActivityIndicator, Button, ScrollView, View } from "react-native";
import { selectCurrentPage, selectIsLoading, selectIsPending, selectPosts } from "@app/redux/article/article.selectors";
import Post from "@app/components/post/Post";

export default function Posts() {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectPosts);
  const currentPage = useSelector(selectCurrentPage);
  const pending = useSelector(selectIsPending);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    if (pending) {
      dispatch(fetchPost(currentPage));
    };
  }, [pending]);

  function loadMore() {
    dispatch(increasePage(currentPage + 1));
  };

  return (
    <ScrollView>
        {
          loading ? <ActivityIndicator size={'small'} />
          : <View>
              {posts.map((post) => 
                <Post key={post.title} title={post.title} description={post.description}
                    author={post.author}
                    publishedAt={post.publishedAt}
                />
              )}
            <Button title={'Завантажити ще'} onPress={loadMore} />
          </View>
        }
      </ScrollView>
  )
}
