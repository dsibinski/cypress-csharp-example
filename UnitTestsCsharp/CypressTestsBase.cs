using NUnit.Framework;
using System;
using System.IO;
using System.Reflection;

namespace UnitTestsCsharp
{
    public class CypressTestsBase
    {
        protected void RunCypressTest(string cypressSpecFilePath)
        {
            var process = new System.Diagnostics.Process();
            var testAssemblyPath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            if (string.IsNullOrEmpty(testAssemblyPath))
            {
                throw new Exception("Cannot find test assembly path!");
            }
            
            var reactAppPath = Path.GetFullPath(Path.Combine(testAssemblyPath, @"..\..\..\..\cypress-react-app"));
            var startInfo = new System.Diagnostics.ProcessStartInfo
            {
                UseShellExecute = false,
                WorkingDirectory = reactAppPath,
                WindowStyle = System.Diagnostics.ProcessWindowStyle.Hidden, FileName = "cmd.exe",
                RedirectStandardInput = true,
                RedirectStandardOutput = true
            };
            process.StartInfo = startInfo;
            process.Start();

            process.StandardInput.WriteLine($"npx cypress run --spec \"cypress/integration/{cypressSpecFilePath}\" & exit");
            var cypressProcessOutput = process.StandardOutput.ReadToEnd();
            process.WaitForExit();
            TestContext.Out.WriteLine($@"Cypress spec {cypressSpecFilePath} run output:");
            TestContext.Out.WriteLine(cypressProcessOutput);
            Assert.AreEqual(0, process.ExitCode, $"Some Cypress tests from {cypressSpecFilePath} failed. See the details for details.");
        }
    }
}