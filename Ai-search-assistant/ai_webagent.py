# import the required libraries
import streamlit as st 
import openai
from duckduckgo_search import ddg

# set up the streamlit app
st.title("AI Search Assistant")
st.caption("This app allows you to search the web using AI")

# get OpenAI key from user
openai_access_token = st.text_input("OpenAI API key", type ="password")

# If OpenAI API key is provided, create an instance of Assistant
if openai_access_token:
    openai.api_key = openai_access_token

    # Get the search query from the user
    query = st.text_input("Enter the Search Query", type="default")

    if query:
        # Perform a DuckDuckGo search
        ddg_results = ddg(query, max_results=5)
        st.write("DuckDuckGo Search Results:")
        for result in ddg_results:
            st.write(result)

        # Use OpenAI to process the query
        response = openai.Completion.create(
            engine="gpt-4",
            prompt=query,
            max_tokens=1024,
            temperature=0.9
        )
        st.write("OpenAI GPT-4 Response:")
        st.write(response.choices[0].text)

