using NUnit.Framework;

namespace UnitTestsCsharp
{
    public class FormTests: CypressTestsBase
    {
        [Test]
        public void SubmitTests()
        {
            // some data initialization code here....
            RunCypressTest("form/submit_spec.ts");
        }
    }
}