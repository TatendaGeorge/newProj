using Abp.Authorization;
using FirstBoilerPlateApp.Authorization.Roles;
using FirstBoilerPlateApp.Authorization.Users;

namespace FirstBoilerPlateApp.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
