So my project is totally new for my team , means my teamtrying to onboard S9 Composer to create there own composer that will help them to use Content symphony (a UI based tool at amazon which helps to create creatives) as the infrastruture as a code :
so that they will keep the CR phase to review the creative from team members so that there will not be any misteck , also due to CR creatives histry will also be tracked,we can easily expand that to the new marketplaces and regions , updation will be easy


for that what i am suppose to do I am suppose to create a Java package:"
that will return a list of creatives to the S9 composer :---> "

so I have one design for my java package in my mind so that I want to take reviews on that from my team is that approach to design a package or java appication is okay or after that I want to make changes in the design as the feedback, so I want to create that design doc for my team so that I will get approval :"My the way of thinging ki how i will create a java package that will have return a list of creatives :is as follow:"
1> I will have one main class that will extend Composer class which has two methods build() which will return a list of creatives to Composer and than that will compare with existing ones with symphony creatives on the basis of display name , after running a command brazil-build composer diff that will create a diff file of all the actions that will take on Content symphony as per our chages in those creatives after CR raing and getting approval from team we will Merge that and than at composer piple of respective region that will take a actions " so point is how I will retur a list of creatives So for that I have desined One approach Ki how I will create a java packge :"as I said GamuteComposerV1 is the main class who will extend Composer class which will has build method and that will return the list of creative so process of creating creatives strat at that function only where I am planning to divide the creative creation on the basis of strategy that will be good because my team is creating a creatives to implements/expriment different strategy at different differnt market places ,regions and  pages , so all the things I think revoles around the stratgey so I have did this creation part to do on strategy basis :->>>
before that I will tell you first about the what Is the creative and what filed it has:--->"creative is used by percolate layer to decide where, when and to whom content need to be showm that is included in content part , where as what content to show to end user, and how that content will get means which service need to call, is there any processing is done at that service itself what content need to pass that service and also is there any filters are and what type of content that remote service isreturning , and also is they are doing weblab expriment related info

example of creative creative=new Creative(displayname)
.with...(hepls to define propertyes to filed)
.withContent(new Content(
.with...(methos to agian define content related properties)
).withRemoteContent(new RemoteContent()
.withWidgetMetadat(
newWidgetMetadat()
.with()
)
withCandidateGeneration()
new candiadteGenreatin()

.
).withCandidateProcessing(new CandidateProcessing())

)
.withPLcement (new placementBuilder.newBuilder(0).with...(same...)
)

like this" I can add multiple placements 

so that I have decides Ki how I will my java package will be like so that It will help me to return a list of creatives :-->
" 1) I will have "GeneralCreative" abstract class that will be havinf general creative related propertices which are common to out team like acess control group, businessgroup,marketingtype and also other  prerties which will creative have :
methods like buildCreative(),getCreative(),buildContent(),buildPlacement() will be abstract 
and I will also be having some methods those which are setGeneralCreativeAttributes:
setGeneralCreativeAttributes()
buildCandidateGeneration(String startegyContextKey,String databaseKeys): bcz in candidateGeneration all other filed will be remain same just those will be differ as per creative needs:
buildCandidateProcessing(int end index):
got tis also most of the things will remain same for all creatives just endIndex will be specife to the creative:
buildCandidateProcessing(int end index,List<JangbuFilterInput> jangbuFilterInputs):
same only filets and endIndex will be creative specifice

done with GeneralCreative class:

than i will be having class to each strategy that our team have :
like one stratgey is "BookBlendsRecentGenre"
so my class name will be like :

2. BookBlendsRecentGenre:
that will extends GeneralCreative class and override all the methods of it
as per strateyg needs

3.I will be having class name by KSS which will have stributes related to the remote stratget which will be same across all the creatives as they all are using KSS as RSS:
to add attributes in content filed related to PSS will be essy so this claa will have setGeneralKssContent(String region ) method tha will set those attributes in content filed and return content which are same for all the content  it take region bcz url is depends upon region:
filed like: aaaservicename,cti,serviceurl,type,authprotcol to set

4. configurationDirectory :
will be having:
json files related to eachstrategy:
which will have array of all the creatives objects which will only have propeties or fileds wich are only specifice to that creative creative which will differs like:
displayname(uniqe), onwer, description, region,filters,endindex,strategyContentKey of remote content ,database keys,reftag,exprimentname, facets,name,titlestring Id, regarding placemnts will like slot, stratdate,status for both content and placement,include and exculde rules:

will differe as per creatives requirement so we will add that info in jsonfile array as object

this is all about:

" 
How I wilbe work :
First when brazil-build command runs :
build methos of GamutComposerV1 class methos will call , where we all init method that will initalize our all the strategys for which we want to create creative and list which will store creatives:

than that build method will be having for loop which will call getCreatives method on all the strategy what we have inilazied that method will return list of creatives to us:
for that respective strategies :
we will add all them in creative list that inita;ized befor :
in getCreatives() method:->>"
we will parse Json file of that staegy and we will iterate or run a fro loop on that Json array of creatives conf:
and build a creative for each creative object of that array :
usingmethods of KSS class, it's on orriridemethods and some from GeneralCreative class:


