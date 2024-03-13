export const START_TAG = "%START_SNIPPET%";
export const END_TAG = "%END_SNIPPET%";

export const parseSnippet = (source: string) => {
  const [pre, textAndPost] = source.indexOf(START_TAG) !== -1 ? source.replace(/(<([^>]+)>)/gi, '').split(START_TAG) : ["", source];
  const [text, post] = textAndPost.indexOf(END_TAG) !== -1 ? textAndPost.replace(/(<([^>]+)>)/gi, '').split(END_TAG) : [textAndPost, ""];
  return { pre, post, text };
};
