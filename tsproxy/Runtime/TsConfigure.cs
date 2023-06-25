using System;
using System.Collections.Generic;
using System.Reflection;
using Puerts;
using UnityEngine;

namespace Typescript.Runtime
{
    [Configure]
    public static class TsConfigure
    {
        [CodeOutputDirectory]
        public static string OutputDir
        {
            get { return "Assets/com.plume.typescript/Gen/"; }
        }

        [Typing]
        public static List<Type> Types
        {
            get
            {
                return FindAllType();
            }
        }

        public static HashSet<string> ExcludeAssemblies = new HashSet<string>()
        {
            "unityplastic"
        };
        public static List<Type> FindAllType()
        {
            List<Type> allTypes = new List<Type>();
            Assembly[] assemblies = AppDomain.CurrentDomain.GetAssemblies();

            foreach (Assembly assembly in assemblies)
            {
                if (ExcludeAssemblies.Contains(assembly.GetName().Name))
                {
                    continue;
                }
                
                if (assembly.IsDynamic)
                {
                    continue;
                }
                
                Type[] types = assembly.GetTypes();
                foreach (var type in types)
                {
                    if (!type.FullName.Contains("=") && !type.FullName.Contains("__"))
                    {
                        allTypes.Add(type);
                    }
                    
                }
            }

            return allTypes;
        }
    }
}