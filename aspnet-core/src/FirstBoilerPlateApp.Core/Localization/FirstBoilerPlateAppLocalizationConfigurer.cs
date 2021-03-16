using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace FirstBoilerPlateApp.Localization
{
    public static class FirstBoilerPlateAppLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(FirstBoilerPlateAppConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(FirstBoilerPlateAppLocalizationConfigurer).GetAssembly(),
                        "FirstBoilerPlateApp.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
