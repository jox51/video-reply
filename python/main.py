import sys
import os
from crewai import Crew, Process
from langchain_openai import ChatOpenAI
from agents import AINewsLetterAgents
from tasks import AINewsLetterTasks
 
try:

    from dotenv import load_dotenv
    load_dotenv() 

    api_key = os.environ.get('OPENAI_API_KEY')


    # Initialize the agents and tasks
    agents = AINewsLetterAgents()
    tasks = AINewsLetterTasks()

    # Initialize the OpenAI GPT-4 language model
    OpenAIGPT35 = ChatOpenAI(
        model="gpt-3.5-turbo",
        api_key=api_key
    )


    # Instantiate the agents
    editor = agents.editor_agent()
    news_fetcher = agents.news_fetcher_agent()
    news_analyzer = agents.news_analyzer_agent()
    newsletter_compiler = agents.newsletter_compiler_agent()

    # Instantiate the tasks
    fetch_news_task = tasks.fetch_news_task(news_fetcher)
    analyze_news_task = tasks.analyze_news_task(news_analyzer, [fetch_news_task])
    compile_newsletter_task = tasks.compile_newsletter_task(
        newsletter_compiler, [analyze_news_task])

    # Form the crew
    crew = Crew(
        agents=[editor, news_fetcher, news_analyzer, newsletter_compiler],
        tasks=[fetch_news_task, analyze_news_task, compile_newsletter_task],
        process=Process.hierarchical,
        manager_llm=OpenAIGPT35,
        verbose=2
    )

    # Kick off the crew's work
    results = crew.kickoff()

    # Print the results
    print("Crew Work Results:")
    print(results)
    print("Newsletter Task Output")
except Exception as e:
    print(f"An error occurred: {e}")
    # Optionally, re-raise the exception if you want to see the full traceback
    raise

    # # def main():
# #     # Check the length of command line arguments
# #     if len(sys.argv) > 1:
# #         # Loop through each argument except the first (script name)
# #         for i in range(1, len(sys.argv)):
# #             print(f"Argument {i}: {sys.argv[i]}")
# #     else:
# #         print("No arguments provided.")
        
# #     api_key = os.environ.get('OPENAI_API_KEY')
 

#     # print(f"API Key: {api_key}")
   

        

# if __name__ == "__main__":
#     main()

 